pipeline {
    agent any

    stages {
        stage('Run Ansible') {
            steps {
                // Make sure .ssh directory exists for Jenkins user and has proper permissions
                sh '''
                   mkdir -p /var/lib/jenkins/.ssh
                   chmod 700 /var/lib/jenkins/.ssh
                   ssh-keyscan -H 18.246.217.247 >> /var/lib/jenkins/.ssh/known_hosts
                '''

                // Run ansible playbook
                sh 'ansible-playbook -i inventory.ini deploy.yml'
            }
        }
    }
}
