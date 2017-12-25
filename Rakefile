# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

# adding this workaround to assets:precompile
Rake::Task.define_task("asets:precompile" => ["yarn:install", "webpacker:compile"])

Rails.application.load_tasks
