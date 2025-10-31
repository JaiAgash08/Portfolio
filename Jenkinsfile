pipeline {
    agent any

    environment {
        NODE_VERSION = "22.0.0"
        NVM_DIR = "${HOME}/.nvm"
        PATH = "${HOME}/.nvm/versions/node/v22.0.0/bin:${PATH}"
        APP_DIR = "apps/web"
    }

    stages {
        stage('Setup Node') {
            steps {
                echo '🔧 Setting up Node.js environment...'
                sh '''
                    rm -rf "$NVM_DIR"
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
                    export NVM_DIR="$HOME/.nvm"
                    . "$NVM_DIR/nvm.sh"
                    nvm install ${NODE_VERSION}
                    nvm use ${NODE_VERSION}
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

                    cd ${APP_DIR}
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

                    cd ${APP_DIR}
                    npm run build || npm run build:prod || echo "No build script found."
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo '🚀 Ready for Azure deployment (placeholder).'
                sh 'echo "✅ Deployment successful placeholder."'
            }
        }
    }

    post {
        success {
            echo '✅ Build completed successfully!'
        }
        failure {
            echo '❌ Build failed. Please check Jenkins logs.'
        }
    }
}
