pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Replace this with your build steps
                sh 'echo "Building..."'
            }
        }
        stage('Test') {
            steps {
                // Replace this with your test steps
                sh 'echo "Testing..."'
            }
        }
        stage('Deploy') {
            steps {
                // Replace this with your deployment steps
                sh 'echo "Deploying..."'
            }
        }
    }

    post {
        success {
            // This block executes if the pipeline is successful
            echo 'Pipeline succeeded!'
        }
        failure {
            // This block executes if the pipeline fails
            echo 'Pipeline failed!'
        }
        always {
            // This block executes regardless of the pipeline outcome
            echo 'Pipeline finished.'
        }
    }
}
