"use strict";
const as_1 = require("../../as");
const utils_1 = require("../utils");
function getName(element) {
    let decorator = utils_1.getDecorator(element.declaration, "exportAs");
    if (decorator.args == null) {
        throw Error("exportAs expects a string argument but got null.");
    }
    if (decorator.args.length != 1) {
        throw Error(`exportAs expects 1 argument but got ${decorator.args.length}`);
    }
    if (!decorator.args[0].isLiteralKind(as_1.LiteralKind.STRING)) {
        throw Error("exportAs expects a string argument");
    }
    return decorator.args[0].value;
}
class Transformer extends as_1.Transform {
    afterInitialize(program) {
        var _a, _b, _c;
        let files = Array.from(program.filesByName.values()).filter((file) => utils_1.isUserEntry(file.source) && !utils_1.isLibrary(file.source));
        for (let file of files) {
            for (let _export of ((_a = file.exports) === null || _a === void 0 ? void 0 : _a.values()) || []) {
                if (_export != null && utils_1.hasDecorator(_export, "exportAs")) {
                    let newName = getName(_export);
                    (_b = file.exports) === null || _b === void 0 ? void 0 : _b.delete(_export.name);
                    (_c = file.exports) === null || _c === void 0 ? void 0 : _c.set(newName, _export);
                }
            }
        }
    }
}
module.exports = Transformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0QXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZXMvZXhwb3J0QXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQU1rQjtBQUNsQixvQ0FBOEU7QUFFOUUsU0FBUyxPQUFPLENBQUMsT0FBd0I7SUFDdkMsSUFBSSxTQUFTLEdBQUcsb0JBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDMUIsTUFBTSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztLQUNqRTtJQUNELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQzlCLE1BQU0sS0FBSyxDQUFDLHVDQUF1QyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDN0U7SUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsZ0JBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN4RCxNQUFNLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0tBQ25EO0lBQ0QsT0FBaUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUsQ0FBQyxLQUFLLENBQUM7QUFDNUQsQ0FBQztBQUVELE1BQU0sV0FBWSxTQUFRLGNBQVM7SUFDakMsZUFBZSxDQUFDLE9BQWdCOztRQUM5QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQ3pELENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxtQkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUM5RCxDQUFDO1FBQ0YsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDdEIsS0FBSyxJQUFJLE9BQU8sSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLE1BQU0sT0FBTSxFQUFFLEVBQUU7Z0JBQ2hELElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxvQkFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRTtvQkFDeEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QixNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUNuQyxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO2lCQUN2QzthQUNGO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7QUFFRCxpQkFBUyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIExpdGVyYWxLaW5kLFxyXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxyXG4gIFByb2dyYW0sXHJcbiAgVHJhbnNmb3JtLFxyXG4gIERlY2xhcmVkRWxlbWVudCxcclxufSBmcm9tIFwiLi4vLi4vYXNcIjtcclxuaW1wb3J0IHsgZ2V0RGVjb3JhdG9yLCBoYXNEZWNvcmF0b3IsIGlzTGlicmFyeSwgaXNVc2VyRW50cnkgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldE5hbWUoZWxlbWVudDogRGVjbGFyZWRFbGVtZW50KTogc3RyaW5nIHtcclxuICBsZXQgZGVjb3JhdG9yID0gZ2V0RGVjb3JhdG9yKGVsZW1lbnQuZGVjbGFyYXRpb24sIFwiZXhwb3J0QXNcIik7XHJcbiAgaWYgKGRlY29yYXRvci5hcmdzID09IG51bGwpIHtcclxuICAgIHRocm93IEVycm9yKFwiZXhwb3J0QXMgZXhwZWN0cyBhIHN0cmluZyBhcmd1bWVudCBidXQgZ290IG51bGwuXCIpO1xyXG4gIH1cclxuICBpZiAoZGVjb3JhdG9yLmFyZ3MubGVuZ3RoICE9IDEpIHtcclxuICAgIHRocm93IEVycm9yKGBleHBvcnRBcyBleHBlY3RzIDEgYXJndW1lbnQgYnV0IGdvdCAke2RlY29yYXRvci5hcmdzLmxlbmd0aH1gKTtcclxuICB9XHJcbiAgaWYgKCFkZWNvcmF0b3IuYXJnc1swXS5pc0xpdGVyYWxLaW5kKExpdGVyYWxLaW5kLlNUUklORykpIHtcclxuICAgIHRocm93IEVycm9yKFwiZXhwb3J0QXMgZXhwZWN0cyBhIHN0cmluZyBhcmd1bWVudFwiKTtcclxuICB9XHJcbiAgcmV0dXJuICg8U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24+ZGVjb3JhdG9yLmFyZ3NbMF0pLnZhbHVlO1xyXG59XHJcblxyXG5jbGFzcyBUcmFuc2Zvcm1lciBleHRlbmRzIFRyYW5zZm9ybSB7XHJcbiAgYWZ0ZXJJbml0aWFsaXplKHByb2dyYW06IFByb2dyYW0pOiB2b2lkIHtcclxuICAgIGxldCBmaWxlcyA9IEFycmF5LmZyb20ocHJvZ3JhbS5maWxlc0J5TmFtZS52YWx1ZXMoKSkuZmlsdGVyKFxyXG4gICAgICAoZmlsZSkgPT4gaXNVc2VyRW50cnkoZmlsZS5zb3VyY2UpICYmICFpc0xpYnJhcnkoZmlsZS5zb3VyY2UpXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICBmb3IgKGxldCBfZXhwb3J0IG9mIGZpbGUuZXhwb3J0cz8udmFsdWVzKCkgfHwgW10pIHtcclxuICAgICAgICBpZiAoX2V4cG9ydCAhPSBudWxsICYmIGhhc0RlY29yYXRvcihfZXhwb3J0LCBcImV4cG9ydEFzXCIpKSB7XHJcbiAgICAgICAgICBsZXQgbmV3TmFtZSA9IGdldE5hbWUoX2V4cG9ydCk7XHJcbiAgICAgICAgICAgIGZpbGUuZXhwb3J0cz8uZGVsZXRlKF9leHBvcnQubmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuZXhwb3J0cz8uc2V0KG5ld05hbWUsIF9leHBvcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0ID0gVHJhbnNmb3JtZXI7XHJcbiJdfQ==