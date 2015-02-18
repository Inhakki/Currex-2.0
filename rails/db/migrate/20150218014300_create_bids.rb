class CreateBids < ActiveRecord::Migration
  def change
    create_table :bids do |t|
      t.references :user
      t.references :post
      t.float :amount
    end
  end
end
