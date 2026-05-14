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

  --port|-p                                  The server port, the default being 80

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vaGVscC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVscEFjdGlvbigpIHtcbiAgY29uc29sZS5sb2coYFVzYWdlOiBcbiAgXG4gIGhpZ2htYXJrIFs8b3B0aW9ucz5dIFs8Y29tbWFuZD5dIFs8YXJndW1lbnQ+XVxuXG5Db21tYW5kczpcblxuICBoZWxwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGlzIGhlbHBcbiAgXG4gIHZlcnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IHRoZSB2ZXJzaW9uXG4gIFxuICBbcHVibGlzaF0gPHByb2plY3QtZGlyZWN0b3J5LW5hbWU+ICAgICAgICAgUHVibGlzaCB0aGUgZ2l2ZW4gcHJvamVjdFxuXG4gIHNlcnZlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSdW4gYSBzZXJ2ZXIgdG8gdmlldyB0aGUgb3V0cHV0IGZpbGVcblxuICBpbml0aWFsaXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBmaWxlXG5cbiAgc2V0LW9wdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldCBvcHRpb25zIFxuXG5PcHRpb25zOlxuXG4gIC0taGVscHwtaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IHRoaXMgaGVscFxuICBcbiAgLS12ZXJzaW9ufC12ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgdGhlIHZlcnNpb25cblxuICAtLXBvcnR8LXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHNlcnZlciBwb3J0LCB0aGUgZGVmYXVsdCBiZWluZyA4MFxuXG4gIC0tZm9udHN8LWYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5IENNVSBmb250cyB0byBhIGZvbnQgZm9sZGVyIG5leHQgdG8gdGhlIG91dHB1dCBmaWxlXG5cbiAgLS13YXRjaHwtdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhdGNoIGZvciBjaGFuZ2VzIHRvIHRoZSBjbGllbnQgZmlsZSBhbmQgaW4gdGhlIG91dHB1dCBkaXJlY3RvcnkgXG5cbiAgLS1jbGllbnR8LWMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgdGhlIGJ1bmRsZWQgY2xpZW50IGFuZCBzdXBwb3J0aW5nIGZpbGVzIG5leHQgdG8gdGhlIG91dHB1dCBmaWxlXG5cbiAgLS1xdWlldGx5fC1xICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJ1biB3aXRoIGFsbW9zdCBubyBjb25zb2xlIGxvZ2dpbmdcblxuICAtLXZpZXctbW9kZXwtbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHZpZXcgbW9kZSwgZWl0aGVyIGRyYWZ0IG9yIHByZXNlbnRhdGlvbi4gVGhlIGRlZmF1bHQgaXMgZHJhZnQuXG5cbiAgLS1pbnB1dC1maWxlLW5hbWV8LWkgICAgICAgICAgICAgICAgICAgICAgIFRoZSBpbnB1dCBmaWxlIG5hbWUsIHRoZSBkZWZhdWx0IGJlaW5nICdkZWZhdWx0Lm1kJ1xuXG5GdXJ0aGVyIGluZm9ybWF0aW9uOlxuXG5QbGVhc2Ugc2VlIHRoZSByZWFkbWUgZmlsZSBvbiBHaXRIdWI6XG5cbiAgaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvaGlnaG1hcmstY2xpXG5gKTtcbn1cbiJdLCJuYW1lcyI6WyJoZWxwQWN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBO0lBQ3RCQyxRQUFRQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDZixDQUFDO0FBQ0QifQ==