require 'rails_helper'

RSpec.describe Bid, :type => :model do
  it { should belong_to(:user) }
  it { should belong_to(:post) }
  it { should validate_presence_of(:amount) }
  it { should validate_numericality_of(:amount) }
end
