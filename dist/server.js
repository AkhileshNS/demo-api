"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
// VARIABLES
const app = express_1.default();
const port = process.env.PORT || 8080;
// MIDDLEWARE
app.use(compression_1.default());
app.use(helmet_1.default());
// ROUTES
app.get('/', (req, res) => res.send('Hello World'));
// BINDING
app.listen(port, () => console.log(`Example app listening on port ${port}`));
//# sourceMappingURL=server.js.map