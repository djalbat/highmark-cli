"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return helpAction;
    }
});
function helpAction() {
    console.log(`Usage: 
  
  highmark [<options>] [<command>] [<argument>]

Commands:

  help                                       Show this help
  
  version                                    Show the version
  
  [publish] <project-directory-name>         Publish the given project

  server                                     Run a server to view the output file

  initialise                                 Create a configuration file

  set-options                                Set options 

Options:

  --help|-h                                  Show this help
  
  --version|-v                               Show the version

  --port|-p                                  The server port, the default being 8888

  --fonts|-f                                 Copy CMU fonts to a font folder next to the output file

  --watch|-w                                 Watch for changes to the client file and in the output directory 

  --client|-c                                Copy the bundled client and supporting files next to the output file

  --quietly|-q                               Run with almost no console logging

  --view-mode|-m                             The view mode, either draft or presentation. The default is draft.

  --input-file-name|-i                       The input file name, the default being 'default.md'

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/highmark-cli
`);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vaGVscC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVscEFjdGlvbigpIHtcbiAgY29uc29sZS5sb2coYFVzYWdlOiBcbiAgXG4gIGhpZ2htYXJrIFs8b3B0aW9ucz5dIFs8Y29tbWFuZD5dIFs8YXJndW1lbnQ+XVxuXG5Db21tYW5kczpcblxuICBoZWxwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGlzIGhlbHBcbiAgXG4gIHZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IHRoZSB2ZXJzaW9uXG4gIFxuICBbcHVibGlzaF0gPHByb2plY3QtZGlyZWN0b3J5LW5hbWU+ICAgICAgICAgUHVibGlzaCB0aGUgZ2l2ZW4gcHJvamVjdFxuXG4gIHNlcnZlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSdW4gYSBzZXJ2ZXIgdG8gdmlldyB0aGUgb3V0cHV0IGZpbGVcblxuICBpbml0aWFsaXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBmaWxlXG5cbiAgc2V0LW9wdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldCBvcHRpb25zIFxuXG5PcHRpb25zOlxuXG4gIC0taGVscHwtaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IHRoaXMgaGVscFxuICBcbiAgLS12ZXJzaW9ufC12ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgdGhlIHZlcnNpb25cblxuICAtLXBvcnR8LXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHNlcnZlciBwb3J0LCB0aGUgZGVmYXVsdCBiZWluZyA4ODg4XG5cbiAgLS1mb250c3wtZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgQ01VIGZvbnRzIHRvIGEgZm9udCBmb2xkZXIgbmV4dCB0byB0aGUgb3V0cHV0IGZpbGVcblxuICAtLXdhdGNofC13ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2F0Y2ggZm9yIGNoYW5nZXMgdG8gdGhlIGNsaWVudCBmaWxlIGFuZCBpbiB0aGUgb3V0cHV0IGRpcmVjdG9yeSBcblxuICAtLWNsaWVudHwtYyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weSB0aGUgYnVuZGxlZCBjbGllbnQgYW5kIHN1cHBvcnRpbmcgZmlsZXMgbmV4dCB0byB0aGUgb3V0cHV0IGZpbGVcblxuICAtLXF1aWV0bHl8LXEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnVuIHdpdGggYWxtb3N0IG5vIGNvbnNvbGUgbG9nZ2luZ1xuXG4gIC0tdmlldy1tb2RlfC1tICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgdmlldyBtb2RlLCBlaXRoZXIgZHJhZnQgb3IgcHJlc2VudGF0aW9uLiBUaGUgZGVmYXVsdCBpcyBkcmFmdC5cblxuICAtLWlucHV0LWZpbGUtbmFtZXwtaSAgICAgICAgICAgICAgICAgICAgICAgVGhlIGlucHV0IGZpbGUgbmFtZSwgdGhlIGRlZmF1bHQgYmVpbmcgJ2RlZmF1bHQubWQnXG5cbkZ1cnRoZXIgaW5mb3JtYXRpb246XG5cblBsZWFzZSBzZWUgdGhlIHJlYWRtZSBmaWxlIG9uIEdpdEh1YjpcblxuICBodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9oaWdobWFyay1jbGlcbmApO1xufVxuIl0sIm5hbWVzIjpbImhlbHBBY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0E7SUFDdEJDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNmLENBQUM7QUFDRCJ9