{ pkgs ? import <nixpkgs> { }, # Use the pinned sources.
}:

with pkgs;

stdenv.mkDerivation {
  name = "mydoc";
  buildInputs = [
    (texlive.combine {
      inherit (texlive)
        scheme-tetex
        # Add other LaTeX libraries (packages) here as needed, e.g:
        amsmath paper cyrillic babel-russian hyphen-russian 
        # build tools
        latexmk;
    })
    glibcLocales
  ];
  src = ./.;
  buildPhase = "make";

  meta = with lib; {
    description = "Describe your document here";
    license = licenses.bsd3;
    platforms = platforms.linux;
  };
}
