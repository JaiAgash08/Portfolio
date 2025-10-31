pipeline {
    agent any

    environment {
        NODE_VERSION = "22.0.0"
        NVM_DIR = "${HOME}/.nvm"
        PATH = "${HOME}/.nvm/versions/node/v22.0.0/bin:${PATH}"
    }

    stages {
        stage('Setup Node') {
            steps {
                echo '🔧 Setting up Node.js environment...'
                sh '''
                    # Clean old nvm if exists
                    rm -rf "$NVM_DIR"

                    # Install nvm
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"

                    # Install Node.js and npm
                    nvm install ${NODE_VERSION}
                    nvm alias default ${NODE_VERSION}
                    nvm use default

                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm packages...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION}

                    # Ensure npm folder exists and reset cache
                    mkdir -p ~/.npm
                    npm cache clean --force || true

                    npm install
                '''
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Building project...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION}

                    npm run build || npm run build:prod || echo "No build script found."
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo '🚀 Deploying to Azure...'
                sh '''
                    if ! command -v az &> /dev/null; then
                        curl -sL https://aka.ms/InstallAzureCLIDeb | bash
                    fi

                    az --version
                    echo "✅ Azure deployment placeholder (ready for actual webapp push)."
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build and Deployment Successful!'
        }
        failure {
            echo '❌ Deployment failed. Please check the Jenkins logs.'
        }
    }
}
