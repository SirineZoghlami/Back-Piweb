pipeline {
    agent any

  environment {
        registryCredentials = "nexus"
        registry = "92.168.1.19:8081/repository/docker-repo/"
        imageName = "nodemongoapp"
        imageVersion = "5.0"
    }

    stages {

          stage('Checkout') {
            steps {
                // Checkout the specific branch
                git branch: 'ZoghlamiSirine', credentialsId: 'github-piweb-backend-token', url: 'https://github.com/MarwenMnx/Back-Piweb.git'
            }
        }
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
                    def scannerHome = tool 'scanner'
                    withSonarQubeEnv {
                        sh "${scannerHome}/bin/sonar-scanner"
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
          //  Uploading Docker images into Nexus Registry
   stage('Deploy to Nexus') {
            steps {
                script {
                    docker.withRegistry(registry, registryCredentials) {
                        sh "docker tag ${imageName}:${imageVersion} ${registry}${imageName}:${imageVersion}"
                        sh "docker push ${registry}${imageName}:${imageVersion}"
                    }
                }
            }
        }
    }
}