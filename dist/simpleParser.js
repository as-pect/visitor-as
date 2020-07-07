"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbXBsZVBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhCQU9lO0FBRWYsTUFBYSxZQUFZO0lBR2YsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFTO1FBQ25DLE9BQU8sSUFBSSxjQUFTLENBQUMsSUFBSSxXQUFNLENBQUMsZUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFTO1FBQzlCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBUyxFQUFFLFdBQW9CLEtBQUs7UUFDeEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUMvRDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7QUFyQkgsb0NBc0JDO0FBckJnQixtQkFBTSxHQUFHLElBQUksV0FBTSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQYXJzZXIsXG4gIFRva2VuaXplcixcbiAgU291cmNlLFxuICBTb3VyY2VLaW5kLFxuICBFeHByZXNzaW9uLFxuICBTdGF0ZW1lbnQsXG59IGZyb20gXCIuLi9hc1wiO1xuXG5leHBvcnQgY2xhc3MgU2ltcGxlUGFyc2VyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG4gIHByaXZhdGUgc3RhdGljIGdldFRva2VuaXplcihzOiBzdHJpbmcpOiBUb2tlbml6ZXIge1xuICAgIHJldHVybiBuZXcgVG9rZW5pemVyKG5ldyBTb3VyY2UoU291cmNlS2luZC5VU0VSLCBcImluZGV4LnRzXCIsIHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZUV4cHJlc3Npb24oczogc3RyaW5nKTogRXhwcmVzc2lvbiB7XG4gICAgbGV0IHJlcyA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbih0aGlzLmdldFRva2VuaXplcihzKSk7XG4gICAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgdGhlIGV4cHJlc3Npb246ICdcIiArIHMgKyBcIidcIik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VTdGF0ZW1lbnQoczogc3RyaW5nLCB0b3BMZXZlbDogYm9vbGVhbiA9IGZhbHNlKTogU3RhdGVtZW50IHtcbiAgICBsZXQgcmVzID0gdGhpcy5wYXJzZXIucGFyc2VTdGF0ZW1lbnQodGhpcy5nZXRUb2tlbml6ZXIocyksIHRvcExldmVsKTtcbiAgICBpZiAocmVzID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSB0aGUgc3RhdGVtZW50OiAnXCIgKyBzICsgXCInXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG4iXX0=