"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleParser = void 0;
const as_1 = require("../as");
class SimpleParser {
    static get parser() {
        return new as_1.Parser();
    }
    static getTokenizer(s, file = "index.ts") {
        return new as_1.Tokenizer(new as_1.Source(as_1.SourceKind.USER, file, s));
    }
    static parseExpression(s) {
        const res = this.parser.parseExpression(this.getTokenizer(s));
        if (res == null) {
            throw new Error("Failed to parse the expression: '" + s + "'");
        }
        return res;
    }
    static parseStatement(s, topLevel = false) {
        const res = this.parser.parseStatement(this.getTokenizer(s), topLevel);
        if (res == null) {
            throw new Error("Failed to parse the statement: '" + s + "'");
        }
        return res;
    }
    static parseTopLevelStatement(s, namespace) {
        const res = this.parser.parseTopLevelStatement(this.getTokenizer(s), namespace);
        if (res == null) {
            throw new Error("Failed to parse the top level statement: '" + s + "'");
        }
        return res;
    }
    static parseClassMember(s, _class) {
        let res = this.parser.parseClassMember(this.getTokenizer(s, _class.range.source.normalizedPath), _class);
        if (res == null) {
            throw new Error("Failed to parse the class member: '" + s + "'");
        }
        return res;
    }
}
exports.SimpleParser = SimpleParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbXBsZVBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFVZTtBQUdmLE1BQWEsWUFBWTtJQUNmLE1BQU0sS0FBSyxNQUFNO1FBQ3ZCLE9BQU8sSUFBSSxXQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFTLEVBQUUsT0FBZSxVQUFVO1FBQzlELE9BQU8sSUFBSSxjQUFTLENBQUMsSUFBSSxXQUFNLENBQUMsZUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFTO1FBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBUyxFQUFFLFFBQVEsR0FBRyxLQUFLO1FBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkUsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsc0JBQXNCLENBQzNCLENBQVMsRUFDVCxTQUF1QztRQUV2QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEYsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBUyxFQUFFLE1BQXdCO1FBQ3pELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUN4RCxNQUFNLENBQ1AsQ0FBQztRQUNGLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsT0FBNkIsR0FBRyxDQUFDO0lBQ25DLENBQUM7Q0FDRjtBQTlDRCxvQ0E4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFBhcnNlcixcclxuICBUb2tlbml6ZXIsXHJcbiAgU291cmNlLFxyXG4gIFNvdXJjZUtpbmQsXHJcbiAgRXhwcmVzc2lvbixcclxuICBTdGF0ZW1lbnQsXHJcbiAgTmFtZXNwYWNlRGVjbGFyYXRpb24sXHJcbiAgQ2xhc3NEZWNsYXJhdGlvbixcclxuICBEZWNsYXJhdGlvblN0YXRlbWVudCxcclxufSBmcm9tIFwiLi4vYXNcIjtcclxuaW1wb3J0IHsgUmFuZ2VUcmFuc2Zvcm0gfSBmcm9tIFwiLi90cmFuc2Zvcm1SYW5nZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZVBhcnNlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHBhcnNlcigpOiBQYXJzZXIge1xyXG4gICAgcmV0dXJuIG5ldyBQYXJzZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldFRva2VuaXplcihzOiBzdHJpbmcsIGZpbGU6IHN0cmluZyA9IFwiaW5kZXgudHNcIik6IFRva2VuaXplciB7XHJcbiAgICByZXR1cm4gbmV3IFRva2VuaXplcihuZXcgU291cmNlKFNvdXJjZUtpbmQuVVNFUiwgZmlsZSwgcykpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBhcnNlRXhwcmVzc2lvbihzOiBzdHJpbmcpOiBFeHByZXNzaW9uIHtcclxuICAgIGNvbnN0IHJlcyA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbih0aGlzLmdldFRva2VuaXplcihzKSk7XHJcbiAgICBpZiAocmVzID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHRoZSBleHByZXNzaW9uOiAnXCIgKyBzICsgXCInXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZVN0YXRlbWVudChzOiBzdHJpbmcsIHRvcExldmVsID0gZmFsc2UpOiBTdGF0ZW1lbnQge1xyXG4gICAgY29uc3QgcmVzID0gdGhpcy5wYXJzZXIucGFyc2VTdGF0ZW1lbnQodGhpcy5nZXRUb2tlbml6ZXIocyksIHRvcExldmVsKTtcclxuICAgIGlmIChyZXMgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgdGhlIHN0YXRlbWVudDogJ1wiICsgcyArIFwiJ1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2VUb3BMZXZlbFN0YXRlbWVudChcclxuICAgIHM6IHN0cmluZyxcclxuICAgIG5hbWVzcGFjZT86IE5hbWVzcGFjZURlY2xhcmF0aW9uIHwgbnVsbFxyXG4gICk6IFN0YXRlbWVudCB7XHJcbiAgICBjb25zdCByZXMgPSB0aGlzLnBhcnNlci5wYXJzZVRvcExldmVsU3RhdGVtZW50KHRoaXMuZ2V0VG9rZW5pemVyKHMpLCBuYW1lc3BhY2UpO1xyXG4gICAgaWYgKHJlcyA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSB0aGUgdG9wIGxldmVsIHN0YXRlbWVudDogJ1wiICsgcyArIFwiJ1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2VDbGFzc01lbWJlcihzOiBzdHJpbmcsIF9jbGFzczogQ2xhc3NEZWNsYXJhdGlvbik6IERlY2xhcmF0aW9uU3RhdGVtZW50IHtcclxuICAgIGxldCByZXMgPSB0aGlzLnBhcnNlci5wYXJzZUNsYXNzTWVtYmVyKFxyXG4gICAgICB0aGlzLmdldFRva2VuaXplcihzLCBfY2xhc3MucmFuZ2Uuc291cmNlLm5vcm1hbGl6ZWRQYXRoKSxcclxuICAgICAgX2NsYXNzXHJcbiAgICApO1xyXG4gICAgaWYgKHJlcyA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSB0aGUgY2xhc3MgbWVtYmVyOiAnXCIgKyBzICsgXCInXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxEZWNsYXJhdGlvblN0YXRlbWVudD5yZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==