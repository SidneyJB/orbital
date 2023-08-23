export const routes = [
  {
    mainTitle: 'User Routes',
    routes: [
      {
        url: '/user/login',
        description: 'Logs a user in',
        requiredFields: ['email', 'password'],
        req: {
          email: 'johndoe@example.com',
          password: 'password123',
        },
        res: {
          status: 'success',
          data: {
            id: 123,
            email: 'johndoe@example.com',
            name: 'John Doe',
            token: 'generated-authentication-token',
          },
        },
      },
      {
        url: '/user/signup',
        description: 'Creates a new user account',
        requiredFields: ['email', 'password', 'name'],
        req: {
          email: 'johndoe@example.com',
          password: 'password123',
          name: 'John Doe',
        },
        res: {
          status: 'success',
          message: 'User registered successfully.',
          data: {
            id: 124,
            email: 'johndoe@example.com',
            name: 'John Doe',
          },
        },
      },
      {
        url: '/user/:id',
        description: 'Gets user information by ID',
        requiredFields: ['id'],
        req: { id: 123 },
        res: {
          status: 'success',
          data: {
            id: 123,
            email: 'johndoe@example.com',
            name: 'John Doe',
            created_at: '2022-05-02T15:44:59.000Z',
          },
        },
      },
    ],
  },
  {
    mainTitle: 'Kafka Routes',
    routes: [
      {
        title: 'Kafka Routes',
        url: '/kafka/:id',
        description: 'Get clusters associated with a user ID.',
        requiredFields: ['Id'],
        req: {
          id: 123,
        },
        res: {
          status: 'success',
          data: [
            {
              id: 1,
              name: 'cluster1',
              user_id: 123,
              created_at: '2022-05-02T15:44:59.000Z',
            },
            {
              id: 2,
              name: 'cluster2',
              user_id: 123,
              created_at: '2022-06-03T10:10:59.000Z',
            },
          ],
        },
      },
      {
        url: '/kafka/cluster/:id',
        description: 'Get cluster information by ID.',
        requiredFields: ['Id'],
        req: {
          id: 1,
        },
        res: {
          status: 'success',
          data: {
            id: 1,
            name: 'cluster1',
            user_id: 123,
            created_at: '2022-05-02T15:44:59.000Z',
          },
        },
      },
    ],
  },
  {
    mainTitle: 'Metrics Routes',
    routes: [
      {
        url: '/metrics',
        description:
          'Get cluster overview metrics associated with a Prometheus port.',
        requiredFields: ['Broker port'],
        req: {
          broker_port: '9092',
        },
        res: {
          status: 'success',
          data: {
            metrics: {
              requests_per_sec: 100,
              active_connections: 50,
              response_rate: 200,
              // more metrics...
            },
          },
        },
      },
      {
        url: '/metrics/:brokerId',
        description: 'Get cluster metrics information by ID.',
        requiredFields: ['brokerId'],
        req: {
          brokerId: 1,
        },
        res: {
          status: 'success',
          data: {
            metrics: {
              requests_per_sec: 120,
              active_connections: 55,
              response_rate: 190,
              failed_requests: 5,
              average_response_time: '30ms',
              // other relevant metrics...
            },
          },
        },
      },
    ],
  },
  {
    mainTitle: 'Cluster Routes',
    routes: [
      {
        url: '/metrics/cluster/:id',
        description: 'Get cluster metrics information by ID.',
        requiredFields: ['Id'],
        req: { id: 1 },
        res: {
          id: 1,
          name: 'cluster1',
          created_at: '2022-05-02T15:44:59.000Z',
          user_id: 123,
        },
      },
    ],
  },
];
