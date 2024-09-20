pipeline{
    agent any
    environment{
        SONAR_HOME= tool "Sonar"
    }
    stages{
        stage("Clone code from the GIT"){
            steps{
                git url: "https://github.com/aviravi2165/sampleMERNCode.git",branch: "main" 
            }
        }
        stage("SonarQube quality analysis"){
            steps{
                withSonarQubeEnv("Sonar"){
                    sh "$SONAR_HOME/bin/sonar-scanner -Dsonar.projectName=sampleMern -Dsonar.projectKey=sampleMern"
                }
            }
        }
        stage("OWASP Dependency Check"){
            steps{
                dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'OWASP-dc'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        stage("Sonar Quality gate scan"){
            steps{
                timeout(time:2,unit:"MINUTES"){
                    waitForQualityGate abortPipeline:false
                }
            }
        }
        stage("Trivy file system check"){
            steps{
                sh "trivy fs --format table -o trivy-fs-report.html ."
            }
        }
        stage("Deploye the code from Docker"){
            steps{
                sh "docker-compose up --build -d"
            }
        }
    }
}
