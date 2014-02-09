class Letter < ActiveRecord::Base
  belongs_to :user
  validates :content, length: { maximum: 1400 }
end
