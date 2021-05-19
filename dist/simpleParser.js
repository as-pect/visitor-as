"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleParser = void 0;
const as_1 = require("../as");
class SimpleParser {
    static getTokenizer(s) {
        return new as_1.Tokenizer(new as_1.Source(as_1.SourceKind.USER, "index.ts", s));
    }
    static parseExpression(s) {
        const parser = new as_1.Parser();
        const res = parser.parseExpression(this.getTokenizer(s));
        if (res == null) {
            throw new Error("Failed to parse the expression: '" + s + "'");
        }
        return res;
    }
    static parseStatement(s, topLevel = false) {
        const parser = new as_1.Parser();
        const res = parser.parseStatement(this.getTokenizer(s), topLevel);
        if (res == null) {
            throw new Error("Failed to parse the statement: '" + s + "'");
        }
        return res;
    }
    static parseTopLevelStatement(s, namespace) {
        const parser = new as_1.Parser();
        const res = parser.parseTopLevelStatement(this.getTokenizer(s), namespace);
        if (res == null) {
            throw new Error("Failed to parse the top level statement: '" + s + "'");
        }
        return res;
    }
}
exports.SimpleParser = SimpleParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbXBsZVBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFRZTtBQUVmLE1BQWEsWUFBWTtJQUVmLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBUztRQUNuQyxPQUFPLElBQUksY0FBUyxDQUFDLElBQUksV0FBTSxDQUFDLGVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBUztRQUM5QixNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQU0sRUFBRSxDQUFDO1FBQzVCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFTLEVBQUUsUUFBUSxHQUFHLEtBQUs7UUFDL0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxXQUFNLEVBQUUsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEUsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBUyxFQUFFLFNBQXVDO1FBQzlFLE1BQU0sTUFBTSxHQUFHLElBQUksV0FBTSxFQUFFLENBQUM7UUFDNUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0UsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDM0U7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDQTtBQWhDRCxvQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFBhcnNlcixcclxuICBUb2tlbml6ZXIsXHJcbiAgU291cmNlLFxyXG4gIFNvdXJjZUtpbmQsXHJcbiAgRXhwcmVzc2lvbixcclxuICBTdGF0ZW1lbnQsXHJcbiAgTmFtZXNwYWNlRGVjbGFyYXRpb24sXHJcbn0gZnJvbSBcIi4uL2FzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlUGFyc2VyIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0VG9rZW5pemVyKHM6IHN0cmluZyk6IFRva2VuaXplciB7XHJcbiAgICByZXR1cm4gbmV3IFRva2VuaXplcihuZXcgU291cmNlKFNvdXJjZUtpbmQuVVNFUiwgXCJpbmRleC50c1wiLCBzKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2VFeHByZXNzaW9uKHM6IHN0cmluZyk6IEV4cHJlc3Npb24ge1xyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xyXG4gICAgY29uc3QgcmVzID0gcGFyc2VyLnBhcnNlRXhwcmVzc2lvbih0aGlzLmdldFRva2VuaXplcihzKSk7XHJcbiAgICBpZiAocmVzID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHRoZSBleHByZXNzaW9uOiAnXCIgKyBzICsgXCInXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZVN0YXRlbWVudChzOiBzdHJpbmcsIHRvcExldmVsID0gZmFsc2UpOiBTdGF0ZW1lbnQge1xyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xyXG4gICAgY29uc3QgcmVzID0gcGFyc2VyLnBhcnNlU3RhdGVtZW50KHRoaXMuZ2V0VG9rZW5pemVyKHMpLCB0b3BMZXZlbCk7XHJcbiAgICBpZiAocmVzID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHRoZSBzdGF0ZW1lbnQ6ICdcIiArIHMgKyBcIidcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBhcnNlVG9wTGV2ZWxTdGF0ZW1lbnQoczogc3RyaW5nLCBuYW1lc3BhY2U/OiBOYW1lc3BhY2VEZWNsYXJhdGlvbiB8IG51bGwpOiBTdGF0ZW1lbnQge1xyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xyXG4gICAgY29uc3QgcmVzID0gcGFyc2VyLnBhcnNlVG9wTGV2ZWxTdGF0ZW1lbnQodGhpcy5nZXRUb2tlbml6ZXIocyksIG5hbWVzcGFjZSk7XHJcbiAgICBpZiAocmVzID09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgdGhlIHRvcCBsZXZlbCBzdGF0ZW1lbnQ6ICdcIiArIHMgKyBcIidcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbn1cclxuIl19