const Comment = () => {
   return (
      <div className="flex flex-row py-5">
         <div className="h-12 w-12 overflow-hidden rounded-full">
            <img alt="User avatar"
               src="https://styles.redditmedia.com/t5_3jtecn/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfM2I0NzdhNmIxYmUyMzY2MjhiMDg4MzllMWU4Y2Y4YmE4ZDkzNTg5YV80MDM5MTE4_rare_660bb495-6934-419a-83db-6ace99f173ad-headshot.png?width=256&amp;height=256&amp;crop=256:256,smart&amp;s=46a799886845bcc35fae80459ca0e197f1754050" />
         </div>
         <div>
            <div className="flex flex-row text-sm">
               <a className="pr-3" href="/user/CoachNo924/">CoachNo924</a>
               <a className="text-gray-400">1 day ago</a>
            </div>
            <div data-testid="comment" >
               <p >That's how baby laptops are made.</p>
            </div>
         </div>
      </div>
   )
}

export default Comment;