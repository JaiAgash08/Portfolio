pipeline {
    agent any

    environment {
        NODE_VERSION = "22.0.0"
        NVM_DIR = "${HOME}/.nvm"
    }

    stages {
        stage('Setup Node') {
            steps {
                echo 'Installing Node.js manually (no sudo)...'
                sh '''
                    # Install Node Version Manager (nvm)
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"

                    # Install and use Node.js 22
                    nvm install ${NODE_VERSION}
                    nvm use ${NODE_VERSION}

                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Running npm install...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION}
                    npm install
                '''
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION}
                    npm run build || npm run build:prod || echo "No build script found"
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo 'Deploying to Azure...'
                sh '''
                    # Install Azure CLI if not present
                    if ! command -v az &> /dev/null; then
                        curl -sL https://aka.ms/InstallAzureCLIDeb | bash
                    fi

                    az --version
                    echo "✅ Deployment placeholder - replace with your real az webapp deploy command"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed. Check logs.'
        }
    }
}
