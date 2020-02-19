# Google WebDriver Login - (Docker & Casperjs)
 This google login in capserjs with docker in order to get cookie and test other google services
 Special Thanks to : https://github.com/vitr/docker-casperjs

# Instructions
#### Step 1) clone this repo
#### Step 2) docker run -d --name casperjs-daemon -v {Your Project Directory}:/home/casperjs-tests --restart always vitr/casperjs
#### Step 3) cd {Your Project Directory}
#### Step 4) make your script
#### Step 5) docker exec casperjs-daemon casperjs {your script}
# casper-pipeline-test
