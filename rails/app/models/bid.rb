class Bid < ActiveRecord::Base
  belongs_to :user
  belongs_to :post

  validates :amount, presence: true
  validates :amount, numericality: { greater_than: 0 }

  private

  def find_exchange_rate
  end

end
