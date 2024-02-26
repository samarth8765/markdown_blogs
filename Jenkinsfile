pipeline {
  agent any
  stages {
    stage('git-checkout') {
      steps {
        git(url: 'https://github.com/samarth8765/markdown_blogs', branch: 'master')
      }
    }

    stage('Log') {
      steps {
        sh '''ls -la
'''
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}