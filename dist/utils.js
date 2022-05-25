"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indent = exports.isStdlib = exports.hasMessage = exports.hasWarningMessage = exports.hasErrorMessage = exports.StringBuilder = exports.updateSource = exports.isMethodNamed = exports.className = exports.isEntry = exports.isUserEntry = exports.cloneNode = exports.getTypeName = exports.getName = exports.toString = exports.not = exports.isLibrary = exports.getDecorator = exports.hasDecorator = exports.isDecorator = exports.decorates = void 0;
const as_1 = require("../as");
const astBuilder_1 = require("./astBuilder");
const cloneDeep = require("lodash.clonedeep");
function decorates(node, name) {
    return node.name.text === name;
}
exports.decorates = decorates;
function isDecorator(name) {
    return (node) => decorates(node, name);
}
exports.isDecorator = isDecorator;
function hasDecorator(node, name) {
    let decl;
    if (node instanceof as_1.DeclarationStatement) {
        decl = node;
    }
    else {
        decl = node.declaration;
    }
    // because it could be undefined
    return decl.decorators?.some(isDecorator(name)) == true;
}
exports.hasDecorator = hasDecorator;
function getDecorator(node, name) {
    return node.decorators?.find(isDecorator(name));
}
exports.getDecorator = getDecorator;
function isLibrary(node) {
    return node.isLibrary || node.internalPath.startsWith("~lib/rt/");
}
exports.isLibrary = isLibrary;
function not(fn) {
    return (t) => !fn(t);
}
exports.not = not;
function toString(node) {
    return astBuilder_1.ASTBuilder.build(node);
}
exports.toString = toString;
const OR_NULL = /\|.*null/;
function getName(node) {
    if (node instanceof as_1.TypeNode) {
        if (node instanceof as_1.NamedTypeNode) {
            let name = getTypeName(node.name);
            const typeParameters = node.typeArguments;
            if (typeParameters && typeParameters.length > 0) {
                name += `<${typeParameters.map(getName).join(", ")}>`;
            }
            if (node.isNullable && !OR_NULL.test(name)) {
                name = `${name} | null`;
            }
            return name;
        }
        else if (node instanceof as_1.TypeName) {
            return toString(node.identifier);
        }
        return "";
    }
    if (node instanceof as_1.ClassDeclaration || node instanceof as_1.InterfaceDeclaration || node instanceof as_1.FunctionDeclaration) {
        return className(node);
    }
    return toString(node.name);
}
exports.getName = getName;
function getTypeName(node) {
    const partNames = [];
    let currentNode = node;
    while (currentNode) {
        partNames.push(toString(currentNode.identifier));
        currentNode = currentNode.next;
    }
    return partNames.join(".");
}
exports.getTypeName = getTypeName;
function cloneNode(node) {
    return cloneDeep(node);
}
exports.cloneNode = cloneNode;
function isUserEntry(node) {
    return node.range.source.sourceKind == as_1.SourceKind.USER_ENTRY;
}
exports.isUserEntry = isUserEntry;
function isEntry(node) {
    return isUserEntry(node) || node.range.source.sourceKind == as_1.SourceKind.LIBRARY_ENTRY;
}
exports.isEntry = isEntry;
function className(_class) {
    let name = toString(_class.name);
    const typeParameters = _class.typeParameters;
    if (typeParameters) {
        name += `<${typeParameters.map(getName).join(", ")}>`;
    }
    return name;
}
exports.className = className;
function isMethodNamed(name) {
    return (stmt) => stmt.kind == as_1.NodeKind.METHODDECLARATION && toString(stmt.name) === name;
}
exports.isMethodNamed = isMethodNamed;
function updateSource(program, newSource) {
    const sources = program.sources;
    for (let i = 0, len = sources.length; i < len; i++) {
        if (sources[i].internalPath == newSource.internalPath) {
            sources[i] = newSource;
            break;
        }
    }
}
exports.updateSource = updateSource;
class StringBuilder {
    sb = [];
    push(s) {
        this.sb.push(s);
    }
    finish(separator = "\n") {
        let res = this.sb.join(separator);
        this.sb = [];
        return res;
    }
    get last() { return this.sb[this.sb.length - 1]; }
}
exports.StringBuilder = StringBuilder;
/**
 *
 * @param emitter DiagnosticEmitter
 * @returns return true if emitter have ERROR message
 */
function hasErrorMessage(emitter) {
    return hasMessage(emitter, as_1.DiagnosticCategory.ERROR);
}
exports.hasErrorMessage = hasErrorMessage;
/**
*
* @param emitter DiagnosticEmitter
* @returns return true if emitter have WARNING message
*/
function hasWarningMessage(emitter) {
    return hasMessage(emitter, as_1.DiagnosticCategory.WARNING);
}
exports.hasWarningMessage = hasWarningMessage;
/**
*
* @param emitter DiagnosticEmitter
* @returns return true if emitter have `category` message
*/
function hasMessage(emitter, category) {
    const diagnostics = emitter.diagnostics ? emitter.diagnostics : [];
    for (const msg of diagnostics) {
        if (msg.category === category) {
            return true;
        }
    }
    return false;
}
exports.hasMessage = hasMessage;
let isStdlibRegex = /\~lib\/(?:array|arraybuffer|atomics|builtins|crypto|console|compat|dataview|date|diagnostics|error|function|iterator|map|math|number|object|process|reference|regexp|set|staticarray|string|symbol|table|typedarray|vector|rt\/?|bindings\/|shared\/typeinfo)|util\/|uri|polyfills|memory/;
function isStdlib(s) {
    let source = s instanceof as_1.Source ? s : s.range.source;
    return isStdlibRegex.test(source.internalPath);
}
exports.isStdlib = isStdlib;
exports.indent = as_1.util.indent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEJBbUJlO0FBQ2YsNkNBQTBDO0FBRTFDLE1BQU0sU0FBUyxHQUFtQixPQUFPLENBQUMsa0JBQWtCLENBQVEsQ0FBQztBQUVyRSxTQUFnQixTQUFTLENBQUMsSUFBbUIsRUFBRSxJQUFZO0lBQ3pELE9BQThCLElBQUksQ0FBQyxJQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztBQUN6RCxDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBWTtJQUN0QyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGRCxrQ0FFQztBQUdELFNBQWdCLFlBQVksQ0FDMUIsSUFBZ0UsRUFDaEUsSUFBWTtJQUVaLElBQUksSUFBSSxDQUFDO0lBQ1QsSUFBSSxJQUFJLFlBQVkseUJBQW9CLEVBQUU7UUFDeEMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNiO1NBQU07UUFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6QjtJQUNELGdDQUFnQztJQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUMxRCxDQUFDO0FBWkQsb0NBWUM7QUFFRCxTQUFnQixZQUFZLENBQzFCLElBQTBCLEVBQzFCLElBQVk7SUFFWixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO0FBQ25ELENBQUM7QUFMRCxvQ0FLQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxJQUFZO0lBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixHQUFHLENBQUksRUFBcUI7SUFDMUMsT0FBTyxDQUFDLENBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUZELGtCQUVDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLElBQVU7SUFDakMsT0FBTyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRkQsNEJBRUM7QUFNRCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFHM0IsU0FBZ0IsT0FBTyxDQUFDLElBQTZCO0lBQ25ELElBQUksSUFBSSxZQUFZLGFBQVEsRUFBRTtRQUM1QixJQUFJLElBQUksWUFBWSxrQkFBYSxFQUFFO1lBQ2pDLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxJQUFJLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUN2RDtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxJQUFJLENBQUE7U0FDWjthQUFNLElBQUksSUFBSSxZQUFZLGFBQVEsRUFBRTtZQUNuQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7U0FDakM7UUFDRCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxJQUFJLFlBQVkscUJBQWdCLElBQUksSUFBSSxZQUFZLHlCQUFvQixJQUFJLElBQUksWUFBWSx3QkFBbUIsRUFBRTtRQUNuSCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4QjtJQUNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBckJELDBCQXFCQztBQUdELFNBQWdCLFdBQVcsQ0FBQyxJQUFjO0lBQ3hDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyQixJQUFJLFdBQVcsR0FBb0IsSUFBSSxDQUFDO0lBQ3hDLE9BQU8sV0FBVyxFQUFFO1FBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pELFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFSRCxrQ0FRQztBQUVELFNBQWdCLFNBQVMsQ0FBaUIsSUFBTztJQUMvQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBVTtJQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxlQUFVLENBQUMsVUFBVSxDQUFDO0FBQy9ELENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLE9BQU8sQ0FBQyxJQUFVO0lBQ2hDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxlQUFVLENBQUMsYUFBYSxDQUFDO0FBQ3ZGLENBQUM7QUFGRCwwQkFFQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxNQUFzRTtJQUM5RixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2hDLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDN0MsSUFBSSxjQUFjLEVBQUU7UUFDbEIsSUFBSSxJQUFJLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUN2RDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQVBELDhCQU9DO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLElBQVk7SUFDeEMsT0FBTyxDQUFDLElBQTBCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksYUFBUSxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO0FBQ2pILENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLFlBQVksQ0FBQyxPQUFnQixFQUFFLFNBQWlCO0lBQzlELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtZQUNuRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLE1BQU07U0FDVDtLQUNKO0FBQ0gsQ0FBQztBQVJELG9DQVFDO0FBRUQsTUFBYSxhQUFhO0lBQ2hCLEVBQUUsR0FBYSxFQUFFLENBQUM7SUFFMUIsSUFBSSxDQUFDLENBQVM7UUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJO1FBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBSyxJQUFJLEtBQWEsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQztDQUN6RDtBQWRELHNDQWNDO0FBRUQ7Ozs7R0FJRztBQUNGLFNBQWdCLGVBQWUsQ0FBQyxPQUEwQjtJQUN6RCxPQUFPLFVBQVUsQ0FBQyxPQUFPLEVBQUUsdUJBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUZBLDBDQUVBO0FBRUQ7Ozs7RUFJRTtBQUNGLFNBQWdCLGlCQUFpQixDQUFDLE9BQTBCO0lBQzFELE9BQU8sVUFBVSxDQUFDLE9BQU8sRUFBRSx1QkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRkQsOENBRUM7QUFFRDs7OztFQUlFO0FBQ0YsU0FBZ0IsVUFBVSxDQUN4QixPQUEwQixFQUMxQixRQUE0QjtJQUU1QixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbkUsS0FBSyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7UUFDM0IsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFYRCxnQ0FXQztBQUdELElBQUksYUFBYSxHQUNmLDJSQUEyUixDQUFDO0FBRTlSLFNBQWdCLFFBQVEsQ0FBQyxDQUE0QjtJQUNuRCxJQUFJLE1BQU0sR0FBRyxDQUFDLFlBQVksV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3RELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUhELDRCQUdDO0FBRVksUUFBQSxNQUFNLEdBQUcsU0FBSSxDQUFDLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERlY29yYXRvck5vZGUsXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxuICBEZWNsYXJhdGlvblN0YXRlbWVudCxcbiAgU291cmNlLFxuICBOb2RlLFxuICBTb3VyY2VLaW5kLFxuICBQcm9ncmFtLFxuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBUeXBlTm9kZSxcbiAgTm9kZUtpbmQsXG4gIEludGVyZmFjZURlY2xhcmF0aW9uLFxuICBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICBUeXBlTmFtZSxcbiAgRGlhZ25vc3RpY0NhdGVnb3J5LFxuICBEaWFnbm9zdGljRW1pdHRlcixcbiAgTmFtZWRUeXBlTm9kZSxcbiAgUmFuZ2UsXG4gIHV0aWwsXG59IGZyb20gXCIuLi9hc1wiO1xuaW1wb3J0IHsgQVNUQnVpbGRlciB9IGZyb20gXCIuL2FzdEJ1aWxkZXJcIjtcblxuY29uc3QgY2xvbmVEZWVwOiA8VD4odDogVCkgPT4gVCA9IHJlcXVpcmUoXCJsb2Rhc2guY2xvbmVkZWVwXCIpIGFzIGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29yYXRlcyhub2RlOiBEZWNvcmF0b3JOb2RlLCBuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICg8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZS5uYW1lKS50ZXh0ID09PSBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNvcmF0b3IobmFtZTogc3RyaW5nKTogKG5vZGU6IERlY29yYXRvck5vZGUpID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKG5vZGUpID0+IGRlY29yYXRlcyhub2RlLCBuYW1lKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFzRGVjb3JhdG9yKFxuICBub2RlOiBEZWNsYXJhdGlvblN0YXRlbWVudCB8IHtkZWNsYXJhdGlvbjogRGVjbGFyYXRpb25TdGF0ZW1lbnR9LFxuICBuYW1lOiBzdHJpbmdcbik6IGJvb2xlYW4ge1xuICBsZXQgZGVjbDtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBEZWNsYXJhdGlvblN0YXRlbWVudCkge1xuICAgIGRlY2wgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGRlY2wgPSBub2RlLmRlY2xhcmF0aW9uOyBcbiAgfSBcbiAgLy8gYmVjYXVzZSBpdCBjb3VsZCBiZSB1bmRlZmluZWRcbiAgcmV0dXJuIGRlY2wuZGVjb3JhdG9ycz8uc29tZShpc0RlY29yYXRvcihuYW1lKSkgPT0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlY29yYXRvcihcbiAgbm9kZTogRGVjbGFyYXRpb25TdGF0ZW1lbnQsXG4gIG5hbWU6IHN0cmluZ1xuKTogRGVjb3JhdG9yTm9kZSB7XG4gIHJldHVybiBub2RlLmRlY29yYXRvcnM/LmZpbmQoaXNEZWNvcmF0b3IobmFtZSkpITtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGlicmFyeShub2RlOiBTb3VyY2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIG5vZGUuaXNMaWJyYXJ5IHx8IG5vZGUuaW50ZXJuYWxQYXRoLnN0YXJ0c1dpdGgoXCJ+bGliL3J0L1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdDxUPihmbjogKHQ6IFQpID0+IGJvb2xlYW4pOiAodDogVCkgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAodDogVCkgPT4gIWZuKHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcobm9kZTogTm9kZSk6IHN0cmluZyB7XG4gIHJldHVybiBBU1RCdWlsZGVyLmJ1aWxkKG5vZGUpO1xufVxuXG5pbnRlcmZhY2UgTmFtZWQge1xuICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbn1cblxuY29uc3QgT1JfTlVMTCA9IC9cXHwuKm51bGwvO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKG5vZGU6IE5vZGUgJiBOYW1lZCB8IFR5cGVOb2RlKTogc3RyaW5nIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBUeXBlTm9kZSkge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgTmFtZWRUeXBlTm9kZSkge1xuICAgICAgbGV0IG5hbWUgPSBnZXRUeXBlTmFtZShub2RlLm5hbWUpXG4gICAgICBjb25zdCB0eXBlUGFyYW1ldGVycyA9IG5vZGUudHlwZUFyZ3VtZW50cztcbiAgICAgIGlmICh0eXBlUGFyYW1ldGVycyAmJiB0eXBlUGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5hbWUgKz0gYDwke3R5cGVQYXJhbWV0ZXJzLm1hcChnZXROYW1lKS5qb2luKFwiLCBcIil9PmA7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5pc051bGxhYmxlICYmICFPUl9OVUxMLnRlc3QobmFtZSkpIHtcbiAgICAgICAgbmFtZSA9IGAke25hbWV9IHwgbnVsbGA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmFtZVxuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFR5cGVOYW1lKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcobm9kZS5pZGVudGlmaWVyKVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBpZiAobm9kZSBpbnN0YW5jZW9mIENsYXNzRGVjbGFyYXRpb24gfHwgbm9kZSBpbnN0YW5jZW9mIEludGVyZmFjZURlY2xhcmF0aW9uIHx8IG5vZGUgaW5zdGFuY2VvZiBGdW5jdGlvbkRlY2xhcmF0aW9uKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZShub2RlKTtcbiAgfVxuICByZXR1cm4gdG9TdHJpbmcobm9kZS5uYW1lKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZU5hbWUobm9kZTogVHlwZU5hbWUpOiBzdHJpbmcge1xuICBjb25zdCBwYXJ0TmFtZXMgPSBbXTtcbiAgbGV0IGN1cnJlbnROb2RlOiBUeXBlTmFtZSB8IG51bGwgPSBub2RlO1xuICB3aGlsZSAoY3VycmVudE5vZGUpIHtcbiAgICBwYXJ0TmFtZXMucHVzaCh0b1N0cmluZyhjdXJyZW50Tm9kZS5pZGVudGlmaWVyKSk7XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICB9XG4gIHJldHVybiBwYXJ0TmFtZXMuam9pbihcIi5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZU5vZGU8VCBleHRlbmRzIE5vZGU+KG5vZGU6IFQpOiBUIHtcbiAgcmV0dXJuIGNsb25lRGVlcChub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlckVudHJ5KG5vZGU6IE5vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIG5vZGUucmFuZ2Uuc291cmNlLnNvdXJjZUtpbmQgPT0gU291cmNlS2luZC5VU0VSX0VOVFJZO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbnRyeShub2RlOiBOb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1VzZXJFbnRyeShub2RlKSB8fCBub2RlLnJhbmdlLnNvdXJjZS5zb3VyY2VLaW5kID09IFNvdXJjZUtpbmQuTElCUkFSWV9FTlRSWTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTmFtZShfY2xhc3M6IENsYXNzRGVjbGFyYXRpb24gfCAgSW50ZXJmYWNlRGVjbGFyYXRpb24gfCBGdW5jdGlvbkRlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgbGV0IG5hbWUgPSB0b1N0cmluZyhfY2xhc3MubmFtZSlcbiAgY29uc3QgdHlwZVBhcmFtZXRlcnMgPSBfY2xhc3MudHlwZVBhcmFtZXRlcnM7XG4gIGlmICh0eXBlUGFyYW1ldGVycykge1xuICAgIG5hbWUgKz0gYDwke3R5cGVQYXJhbWV0ZXJzLm1hcChnZXROYW1lKS5qb2luKFwiLCBcIil9PmA7XG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01ldGhvZE5hbWVkKG5hbWU6IHN0cmluZyk6IChfOiBEZWNsYXJhdGlvblN0YXRlbWVudCkgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAoc3RtdDogRGVjbGFyYXRpb25TdGF0ZW1lbnQpID0+IHN0bXQua2luZCA9PSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTiAmJiB0b1N0cmluZyhzdG10Lm5hbWUpID09PSBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU291cmNlKHByb2dyYW06IFByb2dyYW0sIG5ld1NvdXJjZTogU291cmNlKSB7XG4gIGNvbnN0IHNvdXJjZXMgPSBwcm9ncmFtLnNvdXJjZXM7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoc291cmNlc1tpXS5pbnRlcm5hbFBhdGggPT0gbmV3U291cmNlLmludGVybmFsUGF0aCkge1xuICAgICAgICAgIHNvdXJjZXNbaV0gPSBuZXdTb3VyY2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cmluZ0J1aWxkZXIge1xuICBwcml2YXRlIHNiOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHB1c2goczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKHMpO1xuICB9XG5cbiAgZmluaXNoKHNlcGFyYXRvciA9IFwiXFxuXCIpOiBzdHJpbmcge1xuICAgIGxldCByZXMgPSB0aGlzLnNiLmpvaW4oc2VwYXJhdG9yKTtcbiAgICB0aGlzLnNiID0gW107XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGdldCAgbGFzdCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zYlt0aGlzLnNiLmxlbmd0aCAtMV19XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBlbWl0dGVyIERpYWdub3N0aWNFbWl0dGVyXG4gKiBAcmV0dXJucyByZXR1cm4gdHJ1ZSBpZiBlbWl0dGVyIGhhdmUgRVJST1IgbWVzc2FnZVxuICovXG4gZXhwb3J0IGZ1bmN0aW9uIGhhc0Vycm9yTWVzc2FnZShlbWl0dGVyOiBEaWFnbm9zdGljRW1pdHRlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gaGFzTWVzc2FnZShlbWl0dGVyLCBEaWFnbm9zdGljQ2F0ZWdvcnkuRVJST1IpO1xufVxuXG4vKipcbipcbiogQHBhcmFtIGVtaXR0ZXIgRGlhZ25vc3RpY0VtaXR0ZXJcbiogQHJldHVybnMgcmV0dXJuIHRydWUgaWYgZW1pdHRlciBoYXZlIFdBUk5JTkcgbWVzc2FnZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNXYXJuaW5nTWVzc2FnZShlbWl0dGVyOiBEaWFnbm9zdGljRW1pdHRlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gaGFzTWVzc2FnZShlbWl0dGVyLCBEaWFnbm9zdGljQ2F0ZWdvcnkuV0FSTklORyk7XG59XG5cbi8qKlxuKlxuKiBAcGFyYW0gZW1pdHRlciBEaWFnbm9zdGljRW1pdHRlclxuKiBAcmV0dXJucyByZXR1cm4gdHJ1ZSBpZiBlbWl0dGVyIGhhdmUgYGNhdGVnb3J5YCBtZXNzYWdlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc01lc3NhZ2UoXG4gIGVtaXR0ZXI6IERpYWdub3N0aWNFbWl0dGVyLFxuICBjYXRlZ29yeTogRGlhZ25vc3RpY0NhdGVnb3J5XG4pOiBib29sZWFuIHtcbiAgY29uc3QgZGlhZ25vc3RpY3MgPSBlbWl0dGVyLmRpYWdub3N0aWNzID8gZW1pdHRlci5kaWFnbm9zdGljcyA6IFtdO1xuICBmb3IgKGNvbnN0IG1zZyBvZiBkaWFnbm9zdGljcykge1xuICAgICAgaWYgKG1zZy5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cblxubGV0IGlzU3RkbGliUmVnZXggPVxuICAvXFx+bGliXFwvKD86YXJyYXl8YXJyYXlidWZmZXJ8YXRvbWljc3xidWlsdGluc3xjcnlwdG98Y29uc29sZXxjb21wYXR8ZGF0YXZpZXd8ZGF0ZXxkaWFnbm9zdGljc3xlcnJvcnxmdW5jdGlvbnxpdGVyYXRvcnxtYXB8bWF0aHxudW1iZXJ8b2JqZWN0fHByb2Nlc3N8cmVmZXJlbmNlfHJlZ2V4cHxzZXR8c3RhdGljYXJyYXl8c3RyaW5nfHN5bWJvbHx0YWJsZXx0eXBlZGFycmF5fHZlY3RvcnxydFxcLz98YmluZGluZ3NcXC98c2hhcmVkXFwvdHlwZWluZm8pfHV0aWxcXC98dXJpfHBvbHlmaWxsc3xtZW1vcnkvO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdGRsaWIoczogU291cmNlIHwgeyByYW5nZTogUmFuZ2UgfSk6IGJvb2xlYW4ge1xuICBsZXQgc291cmNlID0gcyBpbnN0YW5jZW9mIFNvdXJjZSA/IHMgOiBzLnJhbmdlLnNvdXJjZTtcbiAgcmV0dXJuIGlzU3RkbGliUmVnZXgudGVzdChzb3VyY2UuaW50ZXJuYWxQYXRoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGluZGVudCA9IHV0aWwuaW5kZW50O1xuIl19