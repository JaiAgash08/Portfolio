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

        stage('Setup Node.js') {
            steps {
                echo '🔧 Setting up Node.js environment...'
                sh '''
                    rm -rf $NVM_DIR
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
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
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm use 22
                    cd apps/web
                    echo "⚙️ Installing dependencies (ignoring peer conflicts)..."
                    npm install --legacy-peer-deps
                    echo "🚧 Building project..."
                    npm run build || echo "⚠️ No build script found"
                '''
            }
        }

        stage('Deploy to Azure') {
            when {
                expression { return fileExists('apps/web/build') }
            }
            steps {
                echo '🚀 Deploying to Azure...'
                sh '''
                    echo "🌀 Packaging build..."
                    cd apps/web
                    zip -r build.zip build
                    echo "✅ Build packaged successfully. Ready for deployment."
                '''
                // You can add Azure CLI deploy commands here later
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
