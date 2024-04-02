pipeline {
    agent any

    environment {
        registryCredentials = 'nexus'
        registry = '92.168.1.19:8087'
        scannerHome = tool 'scanner' // Assuming 'scanner' is a configured tool in Jenkins
    }

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
        
        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv {
                        sh "${env.scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        
        stage('Build application') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Building images (node and mongo)') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }
        
        stage('Deploy to Nexus') {
            steps {
                script {
                    docker.withRegistry("http://${env.registry}", env.registryCredentials) {
                        sh 'docker push ${env.registry}/nodemongoapp:6.0'
                    }
                }
            }
        }
        
        stage('Run application') {
            steps {
                script {
                    docker.withRegistry("http://${env.registry}", env.registryCredentials) {
                        sh 'docker pull ${env.registry}/nodemongoapp:6.0'
                        sh 'docker-compose up -d'
                    }
                }
            }
        }
    }
}
