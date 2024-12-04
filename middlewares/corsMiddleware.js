import cors from 'cors';

export const corsMiddleware = cors({
    origin: ['http://localhost:3000', 'https://your-domain.com'], // Allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});
