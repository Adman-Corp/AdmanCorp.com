# Dev container for AdmanCorp.com based on the official TypeScript/Node devcontainer image
FROM mcr.microsoft.com/devcontainers/typescript-node:18

# Install common tools (kept minimal)
USER root
RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates git curl \
  && rm -rf /var/lib/apt/lists/*

# Return to non-root user
USER vscode
