const jwt = require("jsonwebtoken");

const encrypt = (payload, secret) => {
  try {
    // Create a JWT with the payload and secret
    // Set expiry time to 1 hour (3600 seconds)
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.error("Error creating JWT:", error);
    throw error;
  }
};

// Example usage:
// const payload = { userId: '123', role: 'user' };
// const secret = 'your-secret-key';
// const token = encrypt(payload, secret);

module.exports = encrypt;
