import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity, ChatBoardEntity, SupporterEntity } from "./entities";
import { ok, bad, notFound, isStr } from './core-utils';
import { Supporter } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  app.get('/api/test', (c) => c.json({ success: true, data: { name: 'Geiger Campaign API' }}));
  // SUPPORTERS / LEADS
  app.post('/api/supporters', async (c) => {
    const body = await c.req.json() as Partial<Supporter>;
    if (!body.name || !body.email || !body.zipCode) {
      return bad(c, 'Name, Email, and Zip Code are required.');
    }
    const supporterData: Supporter = {
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      zipCode: body.zipCode,
      type: body.type || 'update',
      phone: body.phone,
      shopLocation: body.shopLocation,
      interests: body.interests || [],
      createdAt: Date.now()
    };
    const created = await SupporterEntity.create(c.env, supporterData);
    return ok(c, { message: 'Thank you for joining the fight!', supporterId: created.id });
  });
  app.get('/api/supporters', async (c) => {
    const cq = c.req.query('cursor');
    const lq = c.req.query('limit');
    const page = await SupporterEntity.list(c.env, cq ?? null, lq ? Math.max(1, (Number(lq) | 0)) : 50);
    return ok(c, page);
  });
  // TEMPLATE COMPATIBILITY ROUTES (USERS/CHATS)
  app.get('/api/users', async (c) => {
    await UserEntity.ensureSeed(c.env);
    const page = await UserEntity.list(c.env, c.req.query('cursor') ?? null);
    return ok(c, page);
  });
  app.get('/api/chats', async (c) => {
    await ChatBoardEntity.ensureSeed(c.env);
    const page = await ChatBoardEntity.list(c.env, c.req.query('cursor') ?? null);
    return ok(c, page);
  });
}