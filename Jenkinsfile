pipeline {
    agent any

    environment {
        NVM_DIR = "${HOME}/.nvm"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/JaiAgash08/Portfolio'
            }
        }

        stage('Setup Node') {
            steps {
                echo '🔧 Installing Node.js via NVM...'
                sh '''
                    # Install NVM if not present
                    if [ ! -d "$NVM_DIR" ]; then
                      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
                    fi

                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

                    nvm install 22
                    nvm alias default 22
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
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm use 22

                    cd apps/web
                    npm install
                    npm run build
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo '🚀 Deploying to Azure (simulation)...'
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm use 22

                    echo "✅ Deployment simulated. Add Azure CLI commands here."
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
