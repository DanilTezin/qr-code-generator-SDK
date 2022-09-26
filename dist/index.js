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
exports.QrClient = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class QrClient {
    constructor(accesstoken) {
        this.accesstoken = accesstoken;
        this.urlQR = `https://api.qr-code-generator.com/v1/create?access-token=${accesstoken}`;
    }
    createQR(config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, cross_fetch_1.default)(this.urlQR, {
                    headers: { 'Content-Type': 'application/json', },
                    method: "POST",
                    body: JSON.stringify(config),
                }).then(response => response.text());
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.QrClient = QrClient;
//# sourceMappingURL=index.js.map