pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Unit Test') {
            steps {
                script {
                    // Run Jest tests
                    sh 'npx jest'
                }
            }
        }
    }
}
