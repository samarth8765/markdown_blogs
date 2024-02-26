pipeline {
  agent any
  stages {
    stage('git-checkout') {
      steps {
        git(url: 'https://github.com/samarth8765/markdown_blogs', branch: 'master')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh '''ls -la
'''
          }
        }

        stage('install pckages') {
          steps {
            sh 'npm install'
          }
        }

      }
    }

    stage('Running app') {
      environment {
        uri = 'mongodb://localhost:27017/blogs'
      }
      steps {
        sh 'pm2 start app.js'
      }
    }

  }
}