Hello! And thank you for downloading the source for the Node Application Patterns tutorial at Pluralsight. There are a couple of things to do before you get started...

FIRST
-----

Make sure you have Rethinkdb installed. You can get it (for free) from http://rethinkdb.com.
You should have Node installed - the latest would be perfect.
To run the test suite here, you have to have 2 modules installed globally:

  -- mocha (npm install mocha -g)
  -- should (npm install should -g)

If you get an error running these commands, it's because you don't have permissions to write to the global module store. You can remedy this on a Mac using:

  -- sudo chown [your user name] -R /usr/local/lib
  -- sudo chown [your user name] -R /usr/local/bin

Next, you'll need to run Grunt so that means you need to have it installed. You can install it using these commands:

  -- npm install grunt -g
  -- npm install grunt-cli -g

You should be all set at this point!

SECOND
------

Now that your environment is setup, you'll need to load up the modules required for this app to run. You can do this by running

  -- npm install

Make sure you run it in the project directory.

Fire up rethinkdb (calling "rethinkdb" in the command line) and run your tests using the "mocha" command!
