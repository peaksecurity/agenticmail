import { describe, expect, it } from 'vitest';
import express from 'express';
import request from 'supertest';
import { createIntegrationRoutes } from '../http-routes.js';

describe('host integration HTTP routes', () => {
  it('does not expose local installer operations over HTTP', async () => {
    const app = express();
    app.use('/api/agenticmail', createIntegrationRoutes());

    for (const [method, path] of [
      ['get', '/integrations/claudecode/status'],
      ['post', '/integrations/claudecode/install'],
      ['post', '/integrations/claudecode/uninstall'],
    ] as const) {
      const response = await request(app)[method](`/api/agenticmail${path}`);
      expect(response.status).toBe(404);
    }
  });
});
