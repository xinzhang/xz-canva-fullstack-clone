require("dotenv").config();

const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const helmet = require("helmet");
const authMiddleware = require("./middleware/auth-middleware");
const { auth } = require("google-auth-library");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//prosy options
const proxyOptions = {
  proxyReqPathResolver: (req) => {
    return req.originalUrl.replace("/^\v1/", "/api");
  },
  proxyErrorHandler: (err, res) => {
    console.error("Proxy error:", err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  },
};

// call design service
app.use(
  "/api/design",
  authMiddleware,
  proxy(process.env.DESIGN, {
    ...proxyOptions,
    parseReqBody: false,
  })
);

// call upload service
app.use(
  "/api/media",
  authMiddleware,
  proxy(process.env.UPLOAD, {
    ...proxyOptions,
    parseReqBody: false,
  })
);

// call subscription service
app.use(
  "/api/subscription",
  authMiddleware,
  proxy(process.env.SUBSCRIPTION, {
    ...proxyOptions,
    parseReqBody: false,
  })
);

app.listen(PORT, () => {
  console.log(`API gateway Server is running on port ${PORT}`);
  console.log(`Design Server is running on port ${process.env.DESIGN}`);
  console.log(`Upload Server is running on port ${process.env.UPLOAD}`);
  console.log(`Subscription Server is running on port ${process.env.SUBSCRIPTION}`);
});
