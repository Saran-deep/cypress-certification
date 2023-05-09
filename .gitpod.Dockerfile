# FROM gitpod/workspace-full-vnc

# ENV CYPRESS_CACHE_FOLDER=/workspace/.cypress-cache

# # Install Cypress dependencies.
# RUN sudo apt-get update \
#     && sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
#     libgtk2.0-0 \
#     libgtk-3-0 \
#     libnotify-dev \
#     libgconf-2-4 \
#     libnss3 \
#     libxss1 \
#     libasound2 \
#     libxtst6 \
#     xauth \
#     xvfb \
#     && sudo rm -rf /var/lib/apt/lists/*

FROM gitpod/workspace-full
RUN sudo apt-get update
# Install Cypress-base dependencies
RUN sudo apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0
RUN sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq \
    libgbm-dev \
    libnotify-dev
RUN sudo apt-get install -y \
    libgconf-2-4 \
    libnss3 \
    libxss1
RUN sudo apt-get install -y \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb
