class CreateGames < ActiveRecord::Migration[6.1]
  def change  
    remove_column :games, :user_id
    add_column :games, :user_id, :bigint
    add_foreign_key :games, :users

    create_table :channels do |t|
      t.bigint :bundle_id
      t.string :name
      t.bigint :game_id
      t.timestamps
    end
    add_foreign_key :channels, :games 
  end

end
