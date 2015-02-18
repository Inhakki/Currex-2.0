require 'rails_helper'

RSpec.describe Post, :type => :model do
  it { should have_many(:bids) }
  it { should have_many(:users).through(:bids) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:currency_type) }
  it { should validate_presence_of(:cash_amount) }
  it { should validate_numericality_of(:cash_amount) }
  it { should validate_presence_of(:is_request) }

end
