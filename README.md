

<body>
  <h1>📝 Fullstack Realtime To-Do List (WebSocket + Redis + MongoDB + React)</h1>

  <p>This project is a real-time to-do list app built using:</p>
  <ul>
    <li><strong>Backend:</strong> Node.js, Express, Socket.IO, Redis, MongoDB</li>
    <li><strong>Frontend:</strong> React (with Vite), Tailwind CSS or custom CSS</li>
    <li><strong>Real-Time Communication:</strong> WebSocket (via Socket.IO)</li>
    <li><strong>Data Store:</strong> Redis (for cache) & MongoDB (for persistence)</li>
    <li><strong>Language:</strong> TypeScript</li>
  </ul>

  <h2>🚀 Features</h2>
  <ul>
    <li>Add new tasks via WebSocket <code>"add"</code> event</li>
    <li>Tasks are stored in Redis under a single key</li>
    <li>If Redis holds more than 50 tasks, they are flushed to MongoDB</li>
    <li>HTTP endpoint <code>/fetchAllTasks</code> to retrieve all tasks</li>
    <li>Responsive UI with task addition and real-time updates</li>
  </ul>

  <h2>📦 Technologies</h2>
  <ul>
    <li>Node.js + Express</li>
    <li>Redis (via <code>redis</code> NPM module)</li>
    <li>MongoDB (Mongoose)</li>
    <li>Socket.IO</li>
    <li>React + Vite</li>
    <li>CSS / Tailwind CSS</li>
  </ul>

  <h2>🛠️ Setup Instructions</h2>

  <h3>Backend</h3>
  <ol>
    <li>Clone the repository-https://github.com/rk28284/fullstack_task_rakesh_server</li>
    <li>Navigate to backend directory</li>
    <li>Install dependencies: <code>npm install</code></li>
    <li>Create a <code>.env</code> file with:
      <pre>
SERVER_PORT=3000
REDIS_KEY=FULLSTACK_TASK_Rakesh
Host=redis-12675.c212.ap-south-1-1.ec2.cloud.redislabs.com
Port=12675
UserNameRedis=default
Password=dssYpBnYQrl01GbCGVhVq2e4dYvUrKJB
MONGO_URL=mongodb+srv://assignment_user:HCgEj5zv8Hxwa4xO@testcluster.6f94f5o.mongodb.net/
DB_NAME=assignment
Collection=assignment_Rakesh
      </pre>
    </li>
    <li>Start the backend: <code>npm run dev</code> or <code>node index.js</code></li>
  </ol>

  <h3>Frontend</h3>
  <ol>
    <li>Navigate to frontend directory</li>
    <li>Install dependencies: <code>npm install</code></li>
    <li>Start Vite dev server: <code>npm run dev</code></li>
    <li>Open in browser: <code>http://localhost:5173</code> (default Vite port)</li>
  </ol>

  <h2>📁 Project Structure</h2>
  <pre>
├── src/
│   ├── routes/
│   ├── models/
│   ├── websocket.js
│   ├── redis.js
│   ├── utils/
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── style/
  </pre>

  <h2>📌 Notes</h2>
  <ul>
    <li>Redis stores task strings temporarily for fast access</li>
    <li>MongoDB stores overflow tasks when Redis > 50</li>
    <li>Frontend listens for <code>taskListUpdated</code> WebSocket event</li>
  </ul>

  <h2>✅ To-Do</h2>
  <ul>
    <li>Add task deletion feature</li>
    <li>Implement authentication</li>
    <li>Add categories/tags to tasks</li>
  </ul>

  <h2>👨‍💻 Author</h2>
  <p>Developed by Rakesh Kumar</p>

  <h2>📃 License</h2>
  <p>This project is licensed under the MIT License.</p>
</body>
</html>
