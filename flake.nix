{
  description = "A Nix-flake-based Node.js development environment";

  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      devShells = forEachSupportedSystem ({ pkgs }: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_20
            nodePackages.pnpm
            (yarn.override { nodejs = nodejs_20; })
            vale
            ];
          shellHook = ''
            echo "Node: `${pkgs.nodejs}/bin/node --version`"
            echo "Vale: `vale -v | awk '{print $3}'`"
        '';
        };
      });
    };
}