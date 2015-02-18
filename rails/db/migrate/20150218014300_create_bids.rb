class CreateBids < ActiveRecord::Migration
  def change
    create_table :bids do |t|
      t.references :user
      t.references :post
    end
  end
end
