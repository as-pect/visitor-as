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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbXBsZVBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFPZTtBQUVmLE1BQWEsWUFBWTtJQUdmLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBUztRQUNuQyxPQUFPLElBQUksY0FBUyxDQUFDLElBQUksV0FBTSxDQUFDLGVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBUztRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQVMsRUFBRSxRQUFRLEdBQUcsS0FBSztRQUMvQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQXJCSCxvQ0FzQkM7QUFyQmdCLG1CQUFNLEdBQUcsSUFBSSxXQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBhcnNlcixcbiAgVG9rZW5pemVyLFxuICBTb3VyY2UsXG4gIFNvdXJjZUtpbmQsXG4gIEV4cHJlc3Npb24sXG4gIFN0YXRlbWVudCxcbn0gZnJvbSBcIi4uL2FzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVQYXJzZXIge1xuICBwcml2YXRlIHN0YXRpYyBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0VG9rZW5pemVyKHM6IHN0cmluZyk6IFRva2VuaXplciB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIobmV3IFNvdXJjZShTb3VyY2VLaW5kLlVTRVIsIFwiaW5kZXgudHNcIiwgcykpO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlRXhwcmVzc2lvbihzOiBzdHJpbmcpOiBFeHByZXNzaW9uIHtcbiAgICBsZXQgcmVzID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKHRoaXMuZ2V0VG9rZW5pemVyKHMpKTtcbiAgICBpZiAocmVzID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSB0aGUgZXhwcmVzc2lvbjogJ1wiICsgcyArIFwiJ1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZVN0YXRlbWVudChzOiBzdHJpbmcsIHRvcExldmVsID0gZmFsc2UpOiBTdGF0ZW1lbnQge1xuICAgIGxldCByZXMgPSB0aGlzLnBhcnNlci5wYXJzZVN0YXRlbWVudCh0aGlzLmdldFRva2VuaXplcihzKSwgdG9wTGV2ZWwpO1xuICAgIGlmIChyZXMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHRoZSBzdGF0ZW1lbnQ6ICdcIiArIHMgKyBcIidcIik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiJdfQ==