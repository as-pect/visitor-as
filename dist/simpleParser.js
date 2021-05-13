"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleParser = void 0;
const as_1 = require("../as");
class SimpleParser {
    static getTokenizer(s) {
        return new as_1.Tokenizer(new as_1.Source(as_1.SourceKind.USER, "index.ts", s));
    }
    static parseExpression(s) {
        let res = this.parser.parseExpression(this.getTokenizer(s));
        if (res == null) {
            throw new Error("Failed to parse the expression: '" + s + "'");
        }
        return res;
    }
    static parseStatement(s, topLevel = false) {
        let res = this.parser.parseStatement(this.getTokenizer(s), topLevel);
        if (res == null) {
            throw new Error("Failed to parse the statement: '" + s + "'");
        }
        return res;
    }
}
exports.SimpleParser = SimpleParser;
SimpleParser.parser = new as_1.Parser();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbXBsZVBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFPZTtBQUVmLE1BQWEsWUFBWTtJQUdmLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBUztRQUNuQyxPQUFPLElBQUksY0FBUyxDQUFDLElBQUksV0FBTSxDQUFDLGVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBUztRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQVMsRUFBRSxRQUFRLEdBQUcsS0FBSztRQUMvQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXJCSCxvQ0FzQkM7QUFyQmdCLG1CQUFNLEdBQUcsSUFBSSxXQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgUGFyc2VyLFxyXG4gIFRva2VuaXplcixcclxuICBTb3VyY2UsXHJcbiAgU291cmNlS2luZCxcclxuICBFeHByZXNzaW9uLFxyXG4gIFN0YXRlbWVudCxcclxufSBmcm9tIFwiLi4vYXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVQYXJzZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0VG9rZW5pemVyKHM6IHN0cmluZyk6IFRva2VuaXplciB7XHJcbiAgICByZXR1cm4gbmV3IFRva2VuaXplcihuZXcgU291cmNlKFNvdXJjZUtpbmQuVVNFUiwgXCJpbmRleC50c1wiLCBzKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2VFeHByZXNzaW9uKHM6IHN0cmluZyk6IEV4cHJlc3Npb24ge1xyXG4gICAgbGV0IHJlcyA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbih0aGlzLmdldFRva2VuaXplcihzKSk7XHJcbiAgICBpZiAocmVzID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHRoZSBleHByZXNzaW9uOiAnXCIgKyBzICsgXCInXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZVN0YXRlbWVudChzOiBzdHJpbmcsIHRvcExldmVsID0gZmFsc2UpOiBTdGF0ZW1lbnQge1xyXG4gICAgbGV0IHJlcyA9IHRoaXMucGFyc2VyLnBhcnNlU3RhdGVtZW50KHRoaXMuZ2V0VG9rZW5pemVyKHMpLCB0b3BMZXZlbCk7XHJcbiAgICBpZiAocmVzID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHRoZSBzdGF0ZW1lbnQ6ICdcIiArIHMgKyBcIidcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxufVxyXG4iXX0=