import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import {
  fetchUserProfile,
  fetchUserRepos,
  fetchUserFollowers,
} from "./../../api/usersProfile";
import classes from "./index.module.css";
import Search from "../../components/Search";
import FollowersModal from "../../components/FollowersModal";
import RepositoriesModal from "../../components/RepositoriesModal";
import Loader from "../../components/Loader";

const UsersProfile = () => {
  const [username, setUsername] = useState("");
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showReposModal, setShowReposModal] = useState(false);
  const [followersData, setFollowersData] = useState([]);
  const [reposData, setReposData] = useState([]);

  const {
    data: userProfile,
    isLoading: loadingProfile,
    isFetched,
  } = useQuery({
    queryKey: ["UsersProfile", username],
    queryFn: () => fetchUserProfile(username),
    enabled: !!username,
    onError: (error) => {
      toast.error("Error fetching user profile: " + error.message);
    },
  });

  const { data: repositories } = useQuery({
    queryKey: ["UserRepos", username],
    queryFn: () => fetchUserRepos(username),
    enabled: !!username,
    onError: (error) => {
      toast.error("Error fetching user repositories: " + error.message);
    },
  });

  const { data: followers } = useQuery({
    queryKey: ["UserFollowers", username],
    queryFn: () => fetchUserFollowers(username),
    enabled: !!username,
    onError: (error) => {
      toast.error("Error fetching user followers: " + error.message);
    },
  });

  // Function to handle username search
  const handleSearch = (inputUsername) => {
    setUsername(inputUsername);
  };

  return (
    <div className={classes.UserProfile}>
      <Search onSearch={handleSearch} />
      {username && userProfile && (
        <div className={classes.avatarContainer}>
          <img
            src={userProfile?.avatar_url || "default-avatar.png"}
            alt={userProfile?.name || "Avatar"}
            className={classes.avatarImage}
          />
        </div>
      )}

      {loadingProfile ? (
        <Loader />
      ) : isFetched && !userProfile ? (
        <div className={classes.noResult}>
          <p>Sorry, there is no result for "{username}".</p>
        </div>
      ) : (
        userProfile && (
          <React.Fragment>
            <div className={classes.totals}>
              <p>Total Repositories: {repositories?.length}</p>
              <p>Total Followers: {followers?.length}</p>
            </div>
            <div className={classes.body}>
              <table>
                <thead>
                  <tr className={classes.headRow}>
                    <th className={classes.headCell}>#</th>
                    <th className={classes.headCell}>Name</th>
                    <th className={classes.headCell}>Login</th>
                    <th className={classes.headCell}>Location</th>
                    <th className={classes.headCell}>Avatar</th>
                    <th className={classes.headCell}>Bio</th>
                    <th className={classes.headCell}>Followers</th>
                    <th className={classes.headCell}>Public Repos</th>
                    <th className={classes.headCell}>Organizations</th>
                    <th className={classes.headCell}>Contributions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={classes.tableRow}>
                    <td className={classes.tableCell}>1</td>
                    <td className={classes.tableCell}>
                      {userProfile?.name || "N/A"}
                    </td>
                    <td className={classes.tableCell}>
                      {userProfile?.login || "N/A"}
                    </td>
                    <td className={classes.tableCell}>
                      {userProfile?.location || "N/A"}
                    </td>
                    <td className={classes.tableCell}>
                      <a
                        href={userProfile.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={userProfile?.avatar_url || "default-avatar.png"}
                          alt={userProfile?.name || "Avatar"}
                          style={{ width: "50px", borderRadius: "50%" }}
                        />
                      </a>
                    </td>
                    <td className={classes.tableCell}>
                      {userProfile?.bio || "N/A"}
                    </td>
                    <td className={classes.tableCell}>
                      {userProfile?.followers === 0
                        ? "0"
                        : userProfile?.followers || "N/A"}
                    </td>
                    <td className={classes.tableCell}>
                      {userProfile?.public_repos === 0
                        ? "0"
                        : userProfile?.public_repos || "N/A"}
                    </td>
                    <td className={classes.tableCell}>
                      {userProfile?.organizations_url || "N/A"}
                    </td>
                    <td className={classes.tableCell}>
                      {userProfile?.public_repos || "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={classes.buttons}>
              <div className={classes.button}>
                <button
                  className={classes.button}
                  onClick={() => {
                    if (!username) {
                      toast.warning(
                        "Please enter a username to view followers."
                      );
                      return;
                    }
                    setFollowersData(followers || []);
                    setShowFollowersModal(true);
                  }}
                >
                  <strong>Followers Info</strong>
                </button>
              </div>
              <div className={classes.button}>
                <button
                  className={classes.button}
                  onClick={() => {
                    if (!username) {
                      toast.warning(
                        "Please enter a username to view repositories."
                      );
                      return;
                    }
                    setReposData(repositories || []);
                    setShowReposModal(true);
                  }}
                >
                  <strong>Repositories Info</strong>
                </button>
              </div>
            </div>
          </React.Fragment>
        )
      )}

      {showFollowersModal && (
        <FollowersModal
          data={followersData}
          onClose={() => setShowFollowersModal(false)}
        ></FollowersModal>
      )}
      {showReposModal && (
        <RepositoriesModal
          data={reposData}
          onClose={() => setShowReposModal(false)}
        ></RepositoriesModal>
      )}
    </div>
  );
};

export default UsersProfile;
