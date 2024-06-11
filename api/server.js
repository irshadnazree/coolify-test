// pages/api/crash.js

export default function handler(req, res) {
  const infiniteLoop = () => {
    while (true) {
      // Intentionally doing nothing to simulate high CPU usage
    }
  };

  infiniteLoop();
  res.status(200).json({ message: 'This will not be reached' });
}
