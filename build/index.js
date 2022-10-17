"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
//const syncAndSeed = require('../server/index');
const port = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, './dist/index.html'));
    // res.send(`
    //   <div>
    //     <h1>Hi there!</h1>
    //   </div>
    // `);
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //await syncAndSeed();
        app.listen(port, () => console.log(`listening on port ${port}`));
    }
    catch (ex) {
        console.log(ex);
    }
});
init();
//# sourceMappingURL=index.js.map