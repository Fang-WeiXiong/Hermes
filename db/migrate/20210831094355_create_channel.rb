class CreateChannel < ActiveRecord::Migration[6.1]
  def change
    create_table :channels do |t|
      t.bigint :bundle_id
      t.string :name
      t.bigint :game_id
      t.timestamps
    end
    add_foreign_key :channels, :games 
  end
end
