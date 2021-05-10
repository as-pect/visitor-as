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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbXBsZVBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4QkFPZTtBQUVmLE1BQWEsWUFBWTtJQUdmLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBUztRQUNuQyxPQUFPLElBQUksY0FBUyxDQUFDLElBQUksV0FBTSxDQUFDLGVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBUztRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQVMsRUFBRSxXQUFvQixLQUFLO1FBQ3hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0FBckJILG9DQXNCQztBQXJCZ0IsbUJBQU0sR0FBRyxJQUFJLFdBQU0sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBQYXJzZXIsXHJcbiAgVG9rZW5pemVyLFxyXG4gIFNvdXJjZSxcclxuICBTb3VyY2VLaW5kLFxyXG4gIEV4cHJlc3Npb24sXHJcbiAgU3RhdGVtZW50LFxyXG59IGZyb20gXCIuLi9hc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZVBhcnNlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXRUb2tlbml6ZXIoczogc3RyaW5nKTogVG9rZW5pemVyIHtcclxuICAgIHJldHVybiBuZXcgVG9rZW5pemVyKG5ldyBTb3VyY2UoU291cmNlS2luZC5VU0VSLCBcImluZGV4LnRzXCIsIHMpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZUV4cHJlc3Npb24oczogc3RyaW5nKTogRXhwcmVzc2lvbiB7XHJcbiAgICBsZXQgcmVzID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKHRoaXMuZ2V0VG9rZW5pemVyKHMpKTtcclxuICAgIGlmIChyZXMgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgdGhlIGV4cHJlc3Npb246ICdcIiArIHMgKyBcIidcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBhcnNlU3RhdGVtZW50KHM6IHN0cmluZywgdG9wTGV2ZWw6IGJvb2xlYW4gPSBmYWxzZSk6IFN0YXRlbWVudCB7XHJcbiAgICBsZXQgcmVzID0gdGhpcy5wYXJzZXIucGFyc2VTdGF0ZW1lbnQodGhpcy5nZXRUb2tlbml6ZXIocyksIHRvcExldmVsKTtcclxuICAgIGlmIChyZXMgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgdGhlIHN0YXRlbWVudDogJ1wiICsgcyArIFwiJ1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==