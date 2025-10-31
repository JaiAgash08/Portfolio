pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/JaiAgash08/Portfolio'
            }
        }

        stage('Setup Node') {
            steps {
                echo '🔧 Setting up Node.js environment...'
                sh '''
                    # Remove old NVM if exists
                    rm -rf ~/.nvm
                    
                    # Install NVM
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
                    
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    
                    # Install Node 22
                    nvm install 22
                    nvm use 22
                    
                    node -v
                    npm -v
                '''
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Building the project...'
                sh '''
                    cd apps/web
                    npm install
                    npm run build
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo '🚀 Deploying to Azure...'
                sh '''
                    echo "Deployment simulated — add Azure CLI commands here"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build and Deployment Successful!'
        }
        failure {
            echo '❌ Build or Deployment Failed. Check Jenkins logs.'
        }
    }
}
